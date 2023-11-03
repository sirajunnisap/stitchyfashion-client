import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Message, UserType, designerType } from '../../../Models/Models'
import { designerById } from '../../../Services/designer/designerData'
import SendIcon from '@mui/icons-material/Send';
import { chatsWithDesigner, getAllMessages, sendMessage } from '../../../Services/chat/ChatstoDesigner';
import ScrollableFeed from 'react-scrollable-feed'
import { UseAppSelector } from '../../../Redux/hooks';
import io from 'socket.io-client';
import { profile } from '../../../Services/client/userData';


function ChatWithDesigner() {

    const ENDPOINT = "https://greendoor.website"
    let socket: any
    socket = io(ENDPOINT)

    const { id } = useParams()
    const [designerData, setDesigner] = useState<designerType | undefined>(undefined)
    // const [loading,setLoading] = useState(false);
    const [messages,setMessages] = useState<Message[]>([])
    const [newMessage, setNewMessage] = useState<string>('')
    // const [chats,setChats] = useState('');
    const [chatId, setChatId] = useState('');
    const [typing,setTyping] = useState<boolean>(false)
    const [userData, setUser] = useState<UserType | undefined>()
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [loading, setLoading] = useState(false);
    //     const { userid } = UseAppSelector((state: any) => state.User);
    //     console.log(userid,"userid in stae");

    //     const currentUserId = userid

    // console.log(currentUserId,"userIDdddddddddd");

    useEffect(() => {
        const userData = async () => {
            const data = await profile()
            setUser(data)
        }
        userData()
    }, [])
    const userId = userData?._id

    //socket

    useEffect(() => {
        socket.emit("setup", userId);
    }, [userId, socket]);


    useEffect(() => {
        socket.on('message recieved', (newMessage: Message) => {
            console.log('got new message',newMessage.chat._id,chatId);
            console.log(messages, "hey");
            

            if (chatId !== newMessage.chat._id) {
                console.log(`message from ${newMessage.user?.name} `);

            } else {
                console.log(messages,newMessage,"messages newMessage");
                
                setMessages([...messages, newMessage]);
            }
        })
    }, [socket, messages])
    useEffect(()=>{
        socket.emit("typing",userId)
      },[newMessage])

      socket.on("typing",()=>setTyping(true))
      socket.on("stoptyping",()=>setTyping(false))


      useEffect(()=>{
        if(containerRef.current){
            containerRef.current.scrollTo(0,containerRef.current.scrollHeight)  
        }
    },[messages])


    useEffect(() => {
        const getDesigner = async () => {
            try {
                const designer = await designerById(id)
                console.log(designer, "designerdatas");
                setDesigner(designer)
            } catch (error) {

            }
        }
        getDesigner()
    }, [id])

    useEffect(() => {
        const fetch = async () => {
            const chats = await chatsWithDesigner(id)
            console.log(chats?._id, "chtas user -- designe r")

            setChatId(chats?._id)

            // //socket

            // socket.emit("join chat", chats?._id);

            // setLoading(true)
            console.log(chats?._id, "here id");
            
            const allmessages = await getAllMessages(chats?._id)
            console.log(allmessages, "all messages in a chatid");
            setMessages(allmessages)
            // setLoading(false)

        }
        fetch()
    }, [id])

    // messages.map((message:any) => {
    //     return message; 
    //   });


    const setMessageFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e, "eventttttt");

        setNewMessage(e.target.value);
        console.log("newmessageeeee", newMessage);

    }

    const handleMessageSend = async () => {

        if (newMessage.trim().length > 0) {
            const res = await sendMessage(newMessage, chatId)
            console.log(res, "got the message respons");
            setNewMessage("");
            console.log(res.content,"res msg");
            socket.emit("stoptyping",userId) 
            socket?.emit('new message', res);
            console.log("messageeeeeeeee", res);

            setMessages([...messages, res])

        }
    }
    return (
        <div className='mt-24'>
            <div className=' h-[600px] border-2 border-gray-300 mx-20  rounded-2xl flex'>

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
                                        messages.length>0 &&
                                        messages?.map((msg,index) => {
                                            // Check if the message is from the current user or the designer
                                            const isUserMessage = msg?.user?._id === userId;

                                            // Determine the alignment and background color based on the message sender
                                            const messageClassNames = `relative max-w-xl px-4 py-2 text-gray-700 rounded shadow ${isUserMessage ? "bg-gray-100 justify-end" : "justify-start"
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
                        <div className='relative w-full bg-gray-200 h-10 rounded-full mx-2 '>
                            {/* <Input className='ml-5 mt-1 font-medium text-gray-400'  Message . . ./> */}

                            <input type="text" className='border-0 rounded-full bg-gray-200 font-medium text-gray-500 outline-none'
                                placeholder='Message . . .'
                                name='message'
                                onChange={(e) => setMessageFn(e)}
                                value={newMessage}
                                required

                            />

                        </div>

                        <div className='flex items-center justify-end mr-2'>
                            <button className='absolute p-3 bg-teal-500 rounded-full' onClick={() => handleMessageSend()}>
                                <SendIcon />

                            </button>

                        </div>



                    </div>

                </div>
                <div className='w-1/4 h-full bg-gray-100 rounded-r-2xl items-center justify-center'>

                    <div className='ml-24 items-center justify-center'>
                        <img alt="..." src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" className="rounded-full ml-5  mt-10  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />





                        <h3 className='text-2xl mt-6 font-bold'>{designerData?.name}</h3>
                        <h6 className='text-base ml-2 font-semibold mt-3'>{designerData?.field}</h6>

                    </div>


                </div>

            </div>
        </div >
    )
}

export default ChatWithDesigner
