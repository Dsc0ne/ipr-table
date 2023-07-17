import {useState} from "react";
import {Button, Checkbox, DatePicker, DatePickerProps} from "antd";
import locale from 'antd/es/date-picker/locale/ru_RU';
import Modal from "../../modal";
import {dateTimeStore, userStore} from "../../store/stores";
import {useSelector} from "react-redux";
import "./table-time-line.scss";
import TableUserChecked from "../table-user-checked/table-user-checked";

export default function TableTimeLine() {
    const [isModalActive, setModalActive] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState([]);
    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        setDate(dateString);
    };
    const onChangeTime = (checkedValues: any) => {
        setTime(checkedValues);
    };
    const handleModalOpen = () => {
        setModalActive(true);
    }
    const handleModalClose = () => {
        setModalActive(false)
    };
    const addDate = () => {
        dateTimeStore.dispatch({
            type: 'ADD_DAY',
            date: date,
            time: time,
        })
        handleModalClose();
    }

    const options = [
        { label: '9:00', value: '9:00' },
        { label: '10:00', value: '10:00' },
        { label: '11:00', value: '11:00' },
    ];
    const usersCount = userStore.getState();

    const counter = useSelector((state: any) => state);
    const result = counter.map((element: any, index: number) => {
            return <div key={index} className="table-time-line__body-item">

                <div className="table-time-line__body-item-date">{element.date}</div>

                <div className="table-time-line__body-item-times">
                    {element.time.map((el: any, ind: number) => {
                            return <div key={ind} className="table-time-line__body-item-times-item">{el}</div>
                        }
                    )}
                </div>


                {usersCount.map((el: any, i: number) => {
                    return <div className="table-time-line__body-item-selects" key={i}>
                        <TableUserChecked timeCount={element.time.length}/>
                    </div>
                })}
            </div>
    });

    return (
        <div className="table-time-line">
            <div className="table-time-line__header">
                <div className="table-time-line__buttons">
               <Button onClick={handleModalOpen}>
                   Добавить дату
               </Button>
            </div>
            </div>
            <div className="table-time-line__body">
                {result}
            </div>
            {isModalActive && (
                <Modal title="Добавление даты" onClose={handleModalClose}>
                    <DatePicker onChange={onChangeDate} locale={locale}/>
                    <Checkbox.Group options={options} onChange={onChangeTime}></Checkbox.Group>
                    <Button type="primary" onClick={addDate}>Применить</Button>
                </Modal>
            )}
        </div>
    )
}