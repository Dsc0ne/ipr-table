import {useState} from "react";
import Modal from "../../modal";
import TableUser from "../table-user/table-user";
import {userStore} from "../../store/stores";
import TableTimeLine from "../table-time-line/table-time-line";
import "./table-main.scss"
import {Button, Input} from "antd";

export default function TableMain() {

    const [isModalActive, setModalActive] = useState(false);
    const [userArr, setUserArr] = useState(['']);
    const [user, setUser] = useState('');
    const handleModalOpen = () => {
        setModalActive(true);
    }
    const handleModalClose = () => {
        setModalActive(false)
    };

    const onUserAdd = (event: any) => {
        setUser(event.target.value)
    }


    const addUser = () => {
        setUserArr([...userArr, user]);
        userStore.dispatch({
            type: 'ADD_USER',
            id: 1,
            name: user,
        })
        handleModalClose();
    }



    return (
        <div className="table-main">
            <div className="table-main__body">
                <div className="table-main__users">
                    <Button className="table-main__button" onClick={handleModalOpen}>
                        Добавить пользователя
                    </Button>
                    <TableUser users={userArr}/>
                </div>
                <TableTimeLine/>
            </div>
            {isModalActive && (
                <Modal title="Добавление пользователя" onClose={handleModalClose}>
                    <label>
                        Имя пользователя
                        <Input onChange={onUserAdd} />
                    </label>
                    <Button type="primary" onClick={addUser}>Добавить</Button>
                </Modal>
            )}
        </div>
    )
}
