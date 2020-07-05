import React from 'react';

import Card from '../components/Card';

import myweb from '../assets/images/myweb.JPG';
import traveltour from '../assets/images/traveltour.JPG';
import toronto from '../assets/images/toronto.JPG';
import todolist from '../assets/images/todolist.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            items:
                [
                    {
                        id: 0,
                        title: 'My Website',
                        subTitle: 'HTML/CSS3, JavaScript',
                        imgSrc: myweb,
                        link: 'https://github.com/escalin29/FS1000-Individual-Assigment.git',
                        selected: true
                    },
                    {
                        id: 1,
                        title: 'Travel Tours Website',
                        subTitle: 'HTML/CSS3, JavaScript',
                        imgSrc: traveltour,
                        link: 'https://github.com/accuitysoft/FS1000group.git',
                        selected: true
                    },
                    {
                        id: 2,
                        title: 'The City of Toronto',
                        subTitle: 'HTML/CSS3, Bootstrap',
                        imgSrc: toronto,
                        link: 'https://github.com/escalin29/FS1010-Assignment1.git',
                        selected: true
                    },

                    {
                        id: 3,
                        title: 'Todo List',
                        subTitle: 'HTML/CSS3, jQuery',
                        imgSrc: todolist,
                        link: 'https://github.com/escalin29/FS1010-Assignment2.git',
                        selected: true
                    },
                ]

        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );

    }

}

export default Carousel;