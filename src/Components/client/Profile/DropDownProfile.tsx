// import React from 'react'
// import { IonIcon } from '@ionic/react';
// import './profile.css'
// function DropDownProfile() {
//   return (
//     <div>
//                                         <div>
// <input type="checkbox" id="toggleActive" name="menu" />
// <div className="navigation">
// 	<div className="userBox">
// 		<div className="imgBox"><img src="https://avatars.githubusercontent.com/u/58844494?v=4" alt="avatar" /></div>
// 		<p className="username">Zwerruga</p>
// 	</div>
// 	<label className="menuToggle" htmlFor="toggleActive">
// 	</label>
// 	<ul className="menu">
// 		<li>
// 			<a href="#">
// 				<IonIcon  name="person-outline"></IonIcon > My Profile
// 			</a>
// 		</li>
// 		<li><a href="#">
// 				<IonIcon  name="chatbubble-outline"></IonIcon > Messages
// 			</a></li>
// 		<li><a href="#">
// 				<IonIcon  name="notifications-outline"></IonIcon > Notification
// 			</a></li>
// 		<li><a href="#">
// 				<IonIcon  name="settings-outline"></IonIcon > Settings
// 			</a></li>
// 		<li><a href="#">
// 				<IonIcon  name="help-outline"></IonIcon > Help & Support
// 			</a></li>
// 		<li><a href="#">
// 				<IonIcon  name="log-out-outline"></IonIcon > Logout
// 			</a></li>
// 	</ul>
// </div>
// </div>
//     </div>
//   )
// }

// export default DropDownProfile

// :root {
//     --transition: 0.5s;
//     --main-color: #555;
//     --box-size: 60px;
//     --shadow-color: rgba(0, 0, 0, 0.1);
//     --count-menu-items: 6;
//   }

//   #toggleActive {
//     display: none;
//   }

//   .navigation {
//     position: fixed;
//     top: 20px;
//     right: 20px;
//     width: calc(var(--box-size) * 2);
//     height: var(--box-size);
//     background: #fff;
//     box-shadow: 0 25px 35px var(--shadow-color);
//     display: flex;
//     justify-content: space-between;
//     transition: height var(--transition), width var(--transition);
//     transition-delay: 0s, calc(var(--transition) * 1.5);
//     overflow: hidden;
//     font-size: calc(var(--box-size) / var(--count-menu-items) * 1.5);
//   }

//   #toggleActive:checked + .navigation {
//     width: calc(var(--box-size) * 5);
//     height: calc(var(--box-size) * (var(--count-menu-items) + 1));
//     transition: width var(--transition), height var(--transition);
//     transition-delay: 0s, calc(var(--transition) * 1.5);
//   }

//   .navigation .userBox {
//     position: relative;
//     width: var(--box-size);
//     height: var(--box-size);
//     background: #fff;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
//     transition: all var(--transition);
//     transition-delay: var(--transition);
//   }

//   .navigation .userBox .imgBox {
//     position: relative;
//     min-width: var(--box-size);
//     height: var(--box-size);
//     overflow: hidden;
//     background: #000;
//     border-radius: 50%;
//     border: calc(var(--box-size) / 6) solid #fff;
//   }

//   .navigation .userBox .imgBox img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   #toggleActive:checked + .navigation .userBox {
//     width: calc(100% - var(--box-size));
//     transition-delay: 0s;
//   }

//   .navigation .userBox .username {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     color: var(--main-color);
//     font-size: 1.1em;
//   }

//   .navigation .menuToggle {
//     width: var(--box-size);
//     height: var(--box-size);
//     background: #fff;
//     border: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .navigation .menuToggle::before,
//   .navigation .menuToggle::after {
//     content: "";
//     position: absolute;
//     width: calc(var(--box-size) / 2);
//     height: calc(var(--box-size) / 30);
//     background: var(--main-color);
//     transition: all var(--transition);
//   }

//   .navigation .menuToggle::before {
//     transform: translateY(calc(var(--box-size) / -6));
//     box-shadow: 0 calc(var(--box-size) / 6) var(--main-color);
//   }

//   #toggleActive:checked + .navigation .menuToggle::before {
//     transform: translateY(0px) rotate(45deg);
//     box-shadow: 0 0 var(--main-color);
//   }

//   .navigation .menuToggle::after {
//     transform: translateY(calc(var(--box-size) / 6));
//   }

//   #toggleActive:checked + .navigation .menuToggle::after {
//     transform: translateY(0px) rotate(-45deg);
//   }

//   .menu {
//     position: absolute;
//     width: 100%;
//     height: calc(100% - var(--box-size));
//     margin-top: var(--box-size);
//     padding: calc(var(--box-size) / 3);
//     border-top: 1px solid var(--shadow-color);
//   }

//   .menu li {
//     list-style: none;
//   }

//   .menu li a {
//     display: flex;
//     align-items: center;
//     margin: 1.5em 0;
//     font-size: 1em;
//     text-decoration: none;
//     color: var(--main-color);
//   }

//   .menu li a:hover {
//     color: #4e65ff;
//   }

//   .menu li a ion-icon {
//     margin-right: 0.8em;
//     font-size: 1.5em;
//   }
