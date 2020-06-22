import React from 'react';


class ArticlesPage extends React.Component {
    state = {
        response: '',
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/articles');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div className='shop-page'>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default ArticlesPage;
