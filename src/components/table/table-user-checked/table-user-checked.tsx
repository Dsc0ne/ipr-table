import {Select} from "antd";

export default function TableUserChecked({timeCount}: any) {
    const selects = [];
    const options = [
        { value: 0, label: '+' },
        { value: 1, label: '-' },
        { value: 3, label: '+/-' },
    ]

   for (let i = 1; i <= timeCount; i++ ){
       selects.push(
           <Select
               defaultValue="-"
               style={{ width: 70 }}
               options={options}
           />
       )
   }

    return (
        <>
            {selects}
        </>
    )
}