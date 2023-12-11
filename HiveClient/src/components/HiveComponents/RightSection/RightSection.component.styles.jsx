import styled from 'styled-components';

export const Right = styled.div`
	height: max-content;
	position: sticky;
	top: ${({ theme }) => theme.spacing.stickyTopRight};
	bottom: 0;
`;

export const Message = styled.div`
		background: ${({ theme }) => theme.colors.white};
		border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
		padding: ${({ theme }) => theme.spacing.cardPadding};
		.heading {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 1rem;
		}
		i {
			font-size: 1.4rem;
		}
		.search-bar {
			display: flex;
			margin-bottom: 1rem;
		}
		.category {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;
			h6 {
				width: 100%;
				text-align: center;
				border-bottom: 4px solid ${({ theme }) => theme.colors.light};
				padding-bottom: 0.5rem;
				font-size: 0.85rem;
			}
			.active {
				border-color: ${({ theme }) => theme.colors.dark};
			}
		}
		.message {
			.message-request {
				color: ${({ theme }) => theme.colors.primary};
			}
			display: flex;
			gap: 1rem;
			margin-bottom: 1rem;
			align-items: start;
			&:last-child {
				margin: 0;
			}
			p {
				font-size: 0.8rem;
			}
			.profile-picture {
				.active {
					width: 0.8rem;
					height: 0.8rem;
					border-radius: 50%;
					border: 3px solid ${({ theme }) => theme.colors.white};
					background: ${({ theme }) => theme.colors.success};
					position: absolute;
					bottom: 0;
					right: 0;
				}
			}
		}
		.profile-picture {
			position: relative;
			overflow: visible;
		}
	.profile-picture {
		img {
			border-radius: 50%;
		}
	}
	.friend-requests {
		margin-top: 1rem;
		h4 {
			color: ${({ theme }) => theme.colors.gray};
			margin: 1rem 0;
		}
	}
	.request {
		background: ${({ theme }) => theme.colors.white};
		padding: ${({ theme }) => theme.spacing.cardPadding};
		border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
		margin-bottom: 0.7rem;
		.info {
			display: flex;
			gap: 1rem;
			margin-bottom: 1rem;
		}
		.action {
			display: flex;
			gap: 1rem;
		}
		.messages-container {
			background-color: #f2dede;
			color: #a94442;
			border: 1px solid #ebccd1;
			padding: 15px;
			margin-bottom: 20px;
			h5 {
				margin: 0;
			}
		}
		.form {
			max-width: calc(100vw - 40px);
			width: 500px;
			height: auto;
			background: rgba(255, 255, 255, 1);
			border-radius: 8px;
			box-shadow: 0 0 40px -10px #fff;
			margin: 3% auto;
			padding: 20px 30px;
			box-sizing: border-box;
			position: relative;
			border-bottom: 5px solid #ff5501;
			h2 {
				margin: 18px 0;
				padding-bottom: 10px;
				width: 210px;
				color: ${({ theme }) => theme.colors.primary};
				font-size: 22px;
				border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
				font-weight: 600;
				margin-bottom: 30px;
			}
			p {
				&:before {
					content: attr(type);
					display: block;
					margin: 10px 0 0;
					font-size: 13px;
					color: #5a5a5a;
					float: left;
					width: 40%;
					transition: all 0.3s;
				}
			}
		}
		.form-control {
			width: 85%;
			padding: 10px;
			box-sizing: border-box;
			background: none;
			outline: none;
			resize: none;
			border: 0;
			font-family: 'Montserrat', sans-serif;
			border: 2px solid #bebed2;
			transition: all 0.3s;
			margin-bottom: 1rem;
			&:focus {
				border-color: ${({ theme }) => theme.colors.primary};
			}
		}
		.form-group {
			margin-bottom: 1rem;
		}
		button {
			padding: 8px 12px;
			margin: 8px 0 0;
			font-family: 'Montserrat', sans-serif;
			border: 2px solid #78788c;
			background: 0;
			color: #5a5a6e;
			cursor: pointer;
			transition: all 0.3s;
			&:hover {
				background: #78788c;
				color: #fff;
			}
		}
		.tright {
			text-align: right;
		}
		.ui-menu {
			max-height: 150px;
			overflow: auto;
			.ui-menu-item {
				padding: 5px;
				font-size: 14px;
			}
		}
		.relative {
			position: relative;
			i.fa {
				&:before {
					color: #444;
					padding: 10px;
					position: absolute;
					left: -3px;
					text-align: center;
				}
				position: absolute;
				top: 0;
				right: 0;
				width: 40px;
				text-align: center;
				border-radius: 0 4px 4px 0;
				width: 0;
				height: 0;
				z-index: 99;
				border-left: 20px solid transparent;
				border-right: 30px solid #ccc;
				border-bottom: 34px solid #ccc;
				transition: all 0.15s ease-in-out;
			}
			.search-bar .input {
				&:focus {
					+ {
						i.fa {
							border-left: 20px solid transparent;
							border-right: 30px solid ${({ theme }) => theme.colors.primary};
							border-bottom: 34px solid ${({ theme }) => theme.colors.primary};
							&:before {
								color: red;
							}
						}
					}
				}
			}
		}
		.input-group {
			.form-control {
				&:not(:first-child) {
					&:not(:last-child) {
						border-radius: 0 4px 4px 0;
					}
				}
			}
		}
		.input-group-addon {
			&:not(:first-child) {
				&:not(:last-child) {
					border-radius: 0 4px 4px 0;
				}
			}
		}
		.input-group-btn {
			&:not(:first-child) {
				&:not(:last-child) {
					border-radius: 0 4px 4px 0;
				}
			}
		}
		.form-control[disabled] {
			background-color: #fff;
		}
		.form-control[readonly] {
			background-color: #fff;
		}
		fieldset[disabled] {
			.form-control {
				background-color: #fff;
			}
		}
	}
`;


	
