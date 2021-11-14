exports.QUIZ = { TABLE_NAME: 'quiz', TEXT: 'text' };
exports.GAME = { TABLE_NAME: 'game', QUIZ_ID: 'quiz_id', ROOM_ID: 'room_id'};
exports.ROOM = { TABLE_NAME: 'room'};
exports.ACTIVE_USER = { TABLE_NAME: 'active_user', USER_ID: 'user_id', ROOM_ID: 'room_id', USER_NAME: 'user_name', ROLE: 'role', AUTHORITY: 'autority' };
exports.SELECTION = { TABLE_NAME: 'selection', GAME_ID: 'game_id', ROOM_ID: 'room_id', USER_ID: 'user_id', TEXT: 'text', IS_ANSWER: 'is_answer' };
exports.ANSWER = { TABLE_NAME: 'quiz', SELECTION_ID: 'selection_id', USER_ID: 'user_id' };
