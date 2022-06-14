import React from "react";

class DivClickMain extends React.Component {
    state = {
        list: [
            {
                title: '1. Fusce eu lorem et dui abui maximus varius?',
            },
            {
                title: '2. Vestibulum sbd ante ipsum primis in faucibus orci?',
            },
            {
                title: '3.  Lorem ipsum dolor sit amet Lorem, ipsum dolor.',
            },
            {
                title: '4. Lorem ipsum dolor adipisicing elit. Omnis, voluptas.',
            },
        ]
    }
    render() {

        return <section>
            <div className="container">
                <div className="input-boxes-4">

                </div>
            </div>
        </section>

    }
}
export default DivClickMain
