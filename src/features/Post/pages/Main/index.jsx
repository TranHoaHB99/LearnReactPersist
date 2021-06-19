import React,{useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { NavLink ,useRouteMatch} from 'react-router-dom';
import { Col, Container, Row,Button } from 'reactstrap';
import {getPosts,postsSelectors} from '../../postSlice';

const MainProducts = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])

    let posts = useSelector(postsSelectors.selectAll)
    const match = useRouteMatch();  
    const renderListPost=posts.map(post=>{
        return (
                <Row className="justify-content-between" key={post.id}>
                    <Col>
                        <p>{post.title}</p>
                    </Col>
                    <Col>
                        <NavLink to={`${match.url}/${post.id}`}><Button>Edit</Button></NavLink>
                    </Col>
                </Row>
        )
    })
    return (
        <Container>
            {renderListPost}
        </Container>
    );
};

export default MainProducts;