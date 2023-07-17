import './table-user.scss';

function TableUser({users}: any) {
    const result = users.map((element: any, index: number) => {
            if (index != 0) {
                return <div key={index} className="table-user-line__name-item">{element} </div>
            }

    });

    return (
        <div className="table-user-line">
            <div className="table-user-line__name">
                {result}
            </div>

        </div>
    )
}

export default TableUser;
