import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as StompJs from '@stomp/stompjs';


//흐름=>연결 하나의 채널을 클라이언트가 구독 => 채팅=> 메세지 송수신 연결끊김등.

function CreateReadChat() {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState('');

  const apply_id = useParams();
  const client = useRef({});
  //0.useRef() 훅을 사용해 속성 값이 변경돼도 재렌더링하지 않고, 다시 렌더링하더라도 값이 유실되지 않도록 클라이언트를 current 속성에 만든다.


  //1.params로 방 id


  const connect = () => {
    client.current = new StompJs.Client({
      //brokerURL:'ws://localhost:3000/CreateReadChat/ws',
      //http일ㅇ경우 ws https일경우 wss
    //brokerURL: 'ws://localhost:8787/ws',

    onConnect: () => {
    //onConnect() => 옵션에서 연결에 성공했을 시 채널을 구독하고 메시지를 받는 함수를 실행한다.
        console.log('success');
        subscribe();//하나의 채널(타깃)을 클라이언트가 구독한다.
        
      },
    });
    client.current.activate();
    //2.클라이언트 활성화
  };

  const publish = (chat) => { //입력되는 채팅
    if (!client.current.connected) return; //연결되지 않았으면 메시지를 보내지 않는다.

    client.current.publish({//클라이언트가 서버에 연결되면 Client#publish 메소드 를 사용하여 STOMP 메시지를 보낼 수 있습니다 .
      destination: '/pub/chat',
    //SEND, SUBSCRIBE 같은 명령을 사용하려면 destination 이라는 헤더를 필요로 하는데 destination 헤더는 어디에 메세지를 전송할지 그리고 어디에서 메세지를 구독할지를 알려주는 헤더이다.구독한 대상에 대해 메세지를 받기 위해 subscribe 메서드를 사용합니다
      body: JSON.stringify({
        applyId: apply_id,
        //
        chat: chat,
      }),
    });

    setChat('');
  };

  const subscribe = () => {//메시지 구독 및 수신
    client.current.subscribe('/sub/chat/' + apply_id, (body) => {//subscribe: 컨트롤러에 보내게 되면 중앙에서 메시지를 관리해준다.
      const json_body = JSON.parse(body.body);
      setChatList((_chat_list) => [
        ..._chat_list, json_body
      ]);
    });
  };

  const disconnect = () => {//연결이 끊겼을 때
    client.current.deactivate();//클라이언트 호출을 비활성화하려면 Client#deactivate . 활성 연결이 있으면 다시 연결 시도를 중지하고 연결을 끊습니다.



  };

  const handleChange = (event) => { // 채팅 입력 시 state에 값 설정
    setChat(event.target.value);
  };

  const handleSubmit = (event, chat) => { // 보내기 버튼 눌렀을 때 publish
    event.preventDefault();

    publish(chat);
  };
  
  useEffect(() => {
    connect();
//  useEffect() 훅을 사용해서 최초 렌더링 시, 웹소켓에 연결되도록 한다.
// 의존성을 빈 배열로 줘서 connect()가 한 번만 실행되도록 한다.

    return () => disconnect();
  }, []);

  return (
    <div>
      <div className={'chat-list'}>{chatList}</div>
      <form onSubmit={(event) => handleSubmit(event, chat)}>
        <div>
          <input type={'text'} name={'chatInput'} onChange={handleChange} value={chat} />
        </div>
        <input type={'submit'} value={'의견 보내기'} />
        {chat}
      </form>
    </div>
  );
}

export default CreateReadChat