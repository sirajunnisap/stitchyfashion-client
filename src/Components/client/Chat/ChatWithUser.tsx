import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Message, UserType, designerType } from '../../../Models/Models'
import { designerById, profile } from '../../../Services/designer/designerData'
import SendIcon from '@mui/icons-material/Send';
import { chatsWithDesigner, chatsWithUser, getAllMessages, getAllMessagesDsgr, sendMessage, sendMessageDsgr } from '../../../Services/chat/ChatstoDesigner';
import ScrollableFeed from 'react-scrollable-feed'
import { UseAppSelector } from '../../../Redux/hooks';
import io from 'socket.io-client';


function ChatWithUser() {

    const ENDPOINT = "http://localhost:4000"
    let socket: any
    socket = io(ENDPOINT)

    const { id } = useParams()
    // const [userData, setUserData] = useState<UserType | undefined>(undefined)
    // const [loading,setLoading] = useState(false);
    const [messages,setMessages] = useState<Message[]>([])
    const [newMessage,setNewMessage] = useState<string>('')
    // const [chats,setChats] = useState('');
    const [chatId,setChatId] = useState('');
    const [designer,setdesigner] = useState<designerType|undefined>()
    // useEffect(() => {
    //     const getDesigner = async () => {
    //         try {
    //             const designer = await userById(id)
    //             console.log(designer, "designerdatas");
    //             setUserData(designer)
    //         } catch (error) {

    //         }
    //     }
    //     getDesigner()
    // }, [id])

    useEffect(()=>{
        const designerData = async()=>{
            const data = await profile()
            setdesigner(data)
        }
        designerData()
    },[])
    const currentUserId = designer?._id

     //socket

     useEffect(() => {
        socket.emit("setup", currentUserId);
    }, [currentUserId, socket]);

    useEffect(() => {
        socket.on('message recieved', (newMessage: Message) => {
            console.log('got new message',newMessage.chat._id,chatId);
            

            if (chatId !== newMessage.chat._id) {
                console.log(`message from ${newMessage.user?.name} `);

            } else {
                console.log(messages,newMessage,"messages newMessage");
                
                setMessages([...messages, newMessage]);
            }
        })
    }, [socket, messages])


    useEffect(()=>{
        const fetch = async()=>{
            const chats = await chatsWithUser(id)
            console.log(chats?._id,"chtas user -- designe r")
            
            setChatId(chats?._id)
            
            const allmessages = await getAllMessagesDsgr(chats?._id)
            console.log(allmessages,"all messages in a chatid");
            setMessages(allmessages)
            

        }
        fetch()
    },[id])

    messages.map((message) => {
        return message; 
      });

    const setMessageFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e,"eventttttt");
        
        setNewMessage(e.target.value);
        console.log("newmessageeeee",newMessage);
        
    }

       const handleMessageSend = async () => {

        if (newMessage.trim().length > 0) {
            const res = await sendMessageDsgr(newMessage, chatId)
            console.log(res, "got the message respons");
            setNewMessage("");
            console.log(res.content,"res msg");
            
            socket?.emit('new message', res);
            console.log("messageeeeeeeee", res);

            setMessages([...messages, res.msg])

        }
    }
    return (
        <div className='ml-44 '>
            <div className=' h-[600px] border-2 border-gray-300 m-20  rounded-2xl flex'>

                <div className='w-3/4 h-full bg-white rounded-l-2xl'>
                  
                    <div className='h-[540px] border-gray-300 mb-2  p-5'>
                    <ScrollableFeed>
                        <ul>

                     
                                
                        <div
        style={{
          maxHeight: '100%', // Set the maximum height of the container
          overflowY: 'auto', // Enable vertical scrolling when content exceeds the height
          marginBottom: '25px'
        }}
      >
                            {
  messages &&
  messages.map((msg, index) => {
    // Check if the message is from the current user or the designer
    const isUserMessage = msg?.designer?._id === currentUserId;
    
    // Determine the alignment and background color based on the message sender
    const messageClassNames = `relative max-w-xl px-4 py-2 text-gray-700 rounded shadow ${
      isUserMessage ? "bg-gray-100 justify-end" : "justify-start"
    }`;

    return (
      <li
        key={index} // Make sure to add a unique key when mapping through elements in a list
        className={`${isUserMessage ? "justify-end" : "justify-start"} flex mb-2`}
      >
        <div className={messageClassNames}>
          <span className="block">{msg?.content}</span>
        </div>
      </li>
    );
  })
}  </div>


                          
                        </ul>
                        </ScrollableFeed>
                    </div>

                 

                    <div className='flex'>
                        <div className=' relative w-full bg-gray-200 h-10 rounded-full mx-2 '>
                            {/* <Input className='ml-5 mt-1 font-medium text-gray-400'  Message . . ./> */}
                            
                            <input type="text" className='border-0 rounded-full bg-gray-200 font-medium text-gray-400 outline-none' 
                            placeholder='Message . . .'
                            name='message'
                            onChange={(e)=>setMessageFn(e)}
                            value={newMessage}
                            required

                            />
                           
                        </div>
                        
                        <div className='flex items-center justify-end mr-2'>
                        <button className='absolute p-3 bg-teal-500 rounded-full' onClick={()=> handleMessageSend()}>
                                <SendIcon />

                            </button>

                        </div>
                      


                    </div>

                </div>
                <div className='w-1/4 h-full bg-gray-100 rounded-r-2xl items-center justify-center'>

                    {/* <div className='ml-24 items-center justify-center'>
                        <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full ml-5  mt-10  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />





                        <h3 className='text-2xl mt-6 font-bold'>{userData?.name}</h3>
                        <h6 className='text-base ml-2 font-semibold mt-3'>purchased coursesssssss</h6>

                    </div> */}


                </div>

            </div>
        </div >
    )
}

export default ChatWithUser
