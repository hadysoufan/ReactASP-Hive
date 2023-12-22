import styled from 'styled-components';
import Story1 from '../../../asset/img/hive/story-1.jpg';
import Story2 from '../../../asset/img/hive/story-2.jpg';
import Story3 from '../../../asset/img/hive/story-3.jpg';
import Story4 from '../../../asset/img/hive/story-4.jpg';
import Story5 from '../../../asset/img/hive/story-5.jpg';
import Story6 from '../../../asset/img/hive/story-6.jpg';


export const Middle = styled.div`
	.stories {
		display: flex;
		justify-content: space-between;
		height: 12rem;
		gap: 0.5rem;
		overflow-x: scroll;
		.story {
			padding: ${({ theme }) => theme.spacing.cardPadding};
			border-radius:${({ theme }) => theme.spacing.cardBorderRadius};
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			font-size: 0.75rem;
			width: 100%;
			position: relative;
			overflow: hidden;
			&::before {
				content: '';
				display: block;
				width: 100%;
				height: 5rem;
				background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
				position: absolute;
				bottom: 0;
			}
			.name {
				z-index: 2;
			}
			&:nth-child(1) {
				background: url(${Story1}) no-repeat center center/cover;
				
				
			}
			&:nth-child(2) {
				background: url(${Story2}) no-repeat center center/cover;
			}
			&:nth-child(3) {
				background: url(${Story3}) no-repeat center center/cover;
			}
			&:nth-child(4) {
				background: url(${Story4}) no-repeat center center/cover;
			}
			&:nth-child(5) {
				background: url(${Story5}) no-repeat center center/cover;
			}
			&:nth-child(6) {
				background: url(${Story6}) no-repeat center center/cover;
			}
		}
	}
	.story {
		.profile-picture {
			width: 2rem;
			height: 2rem;
			align-self: start;
			border: 3px solid ${({ theme }) => theme.colors.primary};
		}
	}
	.create-post-hive {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1rem;
		background: ${({ theme }) => theme.colors.white};
		padding: 0.4rem ${({ theme }) => theme.spacing.cardPadding};
		border-radius: ${({ theme }) => theme.spacing.borderRadius};
		.input-create-post {
			justify-self: start;
			width: 100%;
			padding-left: 1rem;
			background: transparent;
			color: ${({ theme }) => theme.colors.danger};
			margin-right: 1rem;
		}
	}
	.feeds {
		.feed {
			background: ${({ theme }) => theme.colors.white};
			border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
			padding: ${({ theme }) => theme.spacing.cardPadding};
			margin: 1rem 0;
			font-size: 0.85rem;
			line-height: 1.5;
		}
	}
	.feed {
		.head {
			display: flex;
			justify-content: space-between;
			position: relative;
		}
		.user {
			display: flex;
			gap: 1rem;
		}
		.photo {
			border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
			overflow: hidden;
			margin: 0.7rem 0;
		}
		.action-button {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 1.4rem;
			margin: 0.6rem;
		}
	}
	.liked-by {
		display: flex;
		span {
			width: 1.4rem;
			height: 1.4rem;
			display: block;
			border-radius: 50%;
			overflow: hidden;
			border: 2px solid ${({ theme }) => theme.colors.white};
			margin-left: -0.6rem;
			&:first-child {
				margin: 0;
			}
		}
		p {
			margin-left: 0.5rem;
		}
	}
`;

export const DropDown = styled.ul`
	position: absolute;
	top: 60%;
	right: 0;
	z-index: 100;
	display: none;
	padding: 0.5rem 0;
	margin: 0;
	font-size: 0.875rem;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	list-style: none;
	li {
		margin: 0;
		&:hover {
			a {
				background: #ff8906 !important;
				color: #fff;
			}
		}
	}
	a {
		display: block;
		padding: 0.5rem 1rem;
		color: #333;
		text-decoration: none;
		transition: background-color 0.2s;
		&:hover {
			background-color: #fff;
		}
	}
`;

export const Edit = styled.span`
	&:hover {
		.uil-ellipsis-h {
			color: #e77f05;
		}
		.dropdown-menu {
			display: block;
			li {
				&:nth-child(1) {
					a {
						background-color: #fff;
					}
				}
				&:nth-child(2) {
					a {
						background-color: #fff;
					}
				}
			}
		}
	}
`;

