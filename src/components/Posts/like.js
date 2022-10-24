import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import getToken from '../../services/getToken';
import getUser from "../../services/getUser";

export function Like({ id }) {
    const [clicked, setClicked] = useState(false);
    const [likes, setLikes] = useState();
    const [toolTip, setToolTip] = useState();
    const [userId, setUserId] = useState();
    const [token, setToken] = useState("");
    const apiUrl = "http://localhost:4000";

    useEffect(() => {
        const userToken = getToken();
        setToken(userToken);
        if (token) {
            getUser(token)
                .then((res) => {
                    setUserId(res.data.id)
                })
                .catch(() =>
                    alert(
                        "An error occured while trying to fetch the posts, please refresh the page!"
                    )
                );
        }
    }, [token]);

    useEffect(() => {
        const URL = `${apiUrl}/like?postId=${id}`;

        const promise = axios.get(URL);
        promise.then((res) => {
            setLikes(res.data);
            populateTooTip(res.data);
            if (res.data.filter(value => value.likerId === userId).length) {
                setClicked(true);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [clicked]);

    function click() {
        const postId = id;
        const AUT = token;
        const BODY = { userId, postId };

        if (!clicked) {
            axios.post(`${apiUrl}/like`, BODY, AUT)
                .then((res) => {
                    setClicked(true);
                }
                ).catch(err => {
                    console.log(err)
                })
        } else {
            axios.delete(`${apiUrl}/like?userId=${userId}&postId=${postId}`, [], AUT)
                .then((res) => {
                    setClicked(false);
                }
                )
        }

        axios.get(`${apiUrl}/like?postId=${id}`)
            .then((res) => {
                console.log(res.data)
                setLikes(res.data);
                populateTooTip(res.data);
            }
            ).catch(err =>
                console.log(err)
            );
    }

    function populateTooTip(data) {
        let text = "";

        if (data.length === 0) {
            text = "seja o primeiro a curtir!";
        } else {
            if (data.length === 1 && data.filter(value => value.likerId === userId).length === 1) {
                text = "parabens, voce foi o primeiro a curtir!"
            } else if (data.length === 1) {
                text = `${data[0].name} curtiu`
            } else {
                if (data.length === 2 && data.filter(value => value.likerId === userId).length) {
                    if (data.filter(value => value.likerId === userId).length) {
                        text += "Voce e outra pessoa curtiu"
                    }
                } else {
                    let i = 0;

                    if (data.filter(value => value.likerId === userId).length) {
                        text += "Voce, "
                    } else {
                        while (data[i].likerId === userId) {
                            i++;
                        }
                        text += `${data[i].name}, `;
                    }
                    let j = 0;
                    while ((data[j].likerId === userId || data[i].name === data[j].name)) {
                        j++;
                    }
                    text += `${data[j].name} e outras ${data.length - 2} pessoas`;
                }
            }
        }
        setToolTip(text);
    }

    return (
        <Container onClick={() => click()} heartColor={clicked}>
            <div>
                {(clicked ? <FaHeart /> : <FaRegHeart />)}
            </div>
            <div>
                <p data-tip={`${toolTip}`}>{likes?.length} likes</p>
                <ReactTooltip place="bottom" type="light" effect="solid" />
            </div>
        </Container>
    )
}

const Container = styled.div`
    color: ${props => props.heartColor ? "red" : "white"};
    position: relative;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 10%;

    p {
        font-size: 18px;
        color: white;
    }
`