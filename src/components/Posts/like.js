import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import getToken from '../../services/getToken';
import getUser from '../../services/getUser';
import userContext from '../../contexts/userContext';
import BASE_URL from '../../services/BASE_URL';

export function Like({ postId }) {
	const [clicked, setClicked] = useState(false);
	const [likes, setLikes] = useState();
	const [toolTip, setToolTip] = useState();
	const { userdata } = useContext(userContext);
	const [userId, setUserId] = useState(userdata?.id);
	const [token, setToken] = useState('');

	useEffect(() => {
		const URL = `${BASE_URL}/like?postId=${postId}`;

		const promise = axios.get(URL);
		promise
			.then((res) => {
				setLikes(res.data);
				populateTooTip(res.data);
				if (res.data.filter((value) => value.likerId === userId).length) {
					setClicked(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [clicked]);

	function click() {
		const AUT = token;
		const BODY = { userId, postId };

		if (!clicked) {
			axios
				.post(`${BASE_URL}/like`, BODY, AUT)
				.then((res) => {
					setClicked(true);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			axios
				.delete(`${BASE_URL}/like?userId=${userId}&postId=${postId}`, [], AUT)
				.then((res) => {
					setClicked(false);
				});
		}

		axios
			.get(`${BASE_URL}/like?postId=${postId}`)
			.then((res) => {
				setLikes(res.data);
				populateTooTip(res.data);
			})
			.catch((err) => console.log(err));
	}

	function populateTooTip(data) {
		let text = '';

		if (data.length === 0) {
			text = 'seja o primeiro a curtir!';
		} else {
			if (
				data.length === 1 &&
				data.filter((value) => value.likerId === userId).length === 1
			) {
				text = 'parabens, voce foi o primeiro a curtir!';
			} else if (data.length === 1) {
				text = `${data[0].name} curtiu`;
			} else {
				if (
					data.length === 2 &&
					data.filter((value) => value.likerId === userId).length
				) {
					if (data.filter((value) => value.likerId === userId).length) {
						text += 'Voce e outra pessoa curtiu';
					}
				} else {
					let i = 0;
					if (data.length === 2) {
						text = `${data[0].name} e ${data[1].name} curtiu `;
					} else {
						if (data.filter((value) => value.likerId === userId).length) {
							text += 'Voce, ';
						} else {
							while (data[i].likerId === userId) {
								i++;
							}
							text += `${data[i].name}, `;
						}
						let j = 0;
						while (
							data[j].likerId === userId ||
							data[i].name === data[j].name
						) {
							j++;
						}
						text += `${data[j].name} e outras ${data.length - 2} pessoas`;
					}
				}
			}
		}

		setToolTip(text);
	}

	return (
		<Container onClick={() => click()} heartColor={clicked}>
			<div>{clicked ? <FaHeart /> : <FaRegHeart />}</div>
			<div>
				<p data-tip={`${toolTip}`}>{likes?.length} likes</p>
				<ReactTooltip place='bottom' type='light' effect='solid' />
			</div>
		</Container>
	);
}

const Container = styled.div`
	color: ${(props) => (props.heartColor ? 'red' : 'white')};
	position: relative;

	display: flex;
	align-items: center;
	flex-direction: column;
	top: 10%;

	p {
		font-size: 18px;
		color: white;
	}
`;
