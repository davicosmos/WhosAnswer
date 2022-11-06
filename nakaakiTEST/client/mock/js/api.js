const TOP = {};
const HOST_NODE = {addRoom:'/add_room'};
const GUEST_NODE = { getRoomByCode: "/get_room_by_code", enterRoom: "/enter_room" };
const ROOM_NODE = { getRoomInfo: "/room_info" }; //"/:room_id"
const QUESTION_NODE = { getGame:'/getGame' , postAnswer:'/post_answer' , getTsudukeruBtn:'/getTsudukeruBtn'};
const CHOICE_NODE = { getSelection:'/getSelection' , sendSelection: '/sendSelection' };
const RESULT_NODE = { getResult: '/getResult' , postResult: '/postResult' , postQuit: '/postQuit'};

