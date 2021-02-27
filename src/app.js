
const app = {
    telephones: ['İphone X', 'İphone XI', 'İphone 9'],
    descriptions: ['64GB', '128GB', '246GB'],
    price: [10000, 11000, 12000],
};

const onFormSubmit = (event) => {
    event.preventDefault();
    let tel = event.target.elements.txtTel.value;
    let aciklama = event.target.elements.txtDesc.value;
    let fiyat = event.target.elements.txtPrice.value;
    if (tel && aciklama && fiyat) {
        app.telephones.push(tel);
        app.price.push(fiyat);
        app.descriptions.push(aciklama);
    }
    else {
        console.log("Boş alanları doldurun !!!");
    }
    render();
}

const onClickReset = () => {
    app.telephones = [];
    app.descriptions = [];
    app.price = [];
    render();
}

// const sabit değerlerde ileride değiştirilmeyecekleri zaman kullanılır.
const render = () => {
    // let aynı isimde bir değişken vermemek yani override yapmamak için kullanılır.
    let template = (<div>
        <h1>Ecommerce App</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Telefon</th>
                    <th>Depolama</th>
                    <th>Fiyat</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>
                        {
                            (app.telephones.length == 0) ? 'Not available' :
                                app.telephones.map((telephone, index) => {
                                    return <p key={index}>#{index}</p>


                                })
                        }

                    </td>
                    <td>

                        {
                            (app.telephones.length == 0) ? 'Not available' :
                                app.telephones.map((telephone, index) => {
                                    return <p key={index}>{telephone}</p>

                                })
                        }

                    </td>

                    <td>
                        {
                            (app.descriptions.length == 0) ? 'Not available' :
                                app.descriptions.map((description, index) => {
                                    return <p key={index}>{description}</p>
                                })
                        }
                    </td>




                    <td>
                        {
                            (app.price.length == 0) ? 'Not available' :
                                app.price.map((fiyat, index) => {
                                    return <p key={index}>{fiyat}</p>
                                })
                        }
                    </td>
                </tr>
            </tbody>

        </table>
        <hr></hr>
        <button type="submit" onClick={onClickReset}>Sıfırla</button>


        <form onSubmit={onFormSubmit}>
            <br></br>
            <label htmlFor="txtTel">Telefon :</label><br></br>
            <input type="text" name="txtTel" id="txtTel"></input><br></br>
            <label htmlFor="txtDesc">Özellikler :</label><br></br>
            <input type="text" name="txtDesc" id="txtDesc"></input><br></br>
            <label htmlFor="txtPrice">Fiyat :</label><br></br>
            <input type="text" name="txtPrice" id="txtPrice"></input><br></br><br></br>
            <button type="submit">Telefon Ekle</button>
        </form>

    </div>);
    ReactDOM.render(template, root);
};

render();

