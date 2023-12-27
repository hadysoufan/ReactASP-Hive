import { createGlobalStyle } from 'styled-components';

const HiveGlobal = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
	text-decoration: none;
	list-style: none;
	list-style-type: none;
	border: none;
	&::before {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
		list-style-type: none;
		border: none;
	}
	&::after {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
		list-style-type: none;
		border: none;
	}
}
body {
	color: ${({ theme }) => theme.colors.dark};
	background: ${({ theme }) => theme.colors.light};
	overflow: visible;
}
.hive-container {
	width: 75%;
	margin: 0 auto;
	padding: 0.27rem 0 !important;
}
.profile-picture {
	width: 2.7rem;
	aspect-ratio: 1/1;
	border-radius: 50%;
	overflow: hidden;
	margin-top: 0.25rem;
}
.image {
	display: block;
	width: 100%;
}
.btn-hive {
	display: inline-block;
	padding: ${({ theme }) => theme.spacing.btnPadding};
	font-weight: 500;
	border-radius: ${({ theme }) => theme.spacing.borderRadius};
	cursor: pointer;
	transition: all 300ms ease;
	font-size: 0.9rem;
	&:hover {
		opacity: 0.8;
		background-color: #b36004;
	}
}
.btn-primary-hive {
	background: ${({ theme }) => theme.colors.primary};
	color: #fff;
	border-color: inherit;
}
.text-bold {
	font-weight: 500;
}
.text-muted {
	color: ${({ theme }) => theme.colors.grey};
}


/* ///////////////////////////////////// */
/* Main section style */
.main-hive {
	position: relative;
	top: 5.4rem;
	.hive-container {
		display: grid;
		grid-template-columns: 18vw auto 20vw;
		column-gap: 2rem;
		position: relative;
	}
}

/* ///////////////////////////////////// */
/* Media Quesry section style */
/* ///////////////////////////////////// */


/* for laptops and big tablets */

@media screen and (max-width: 1200px) {
	.hive-container {
		width: 96%;
	}
	main {
		.hive-container {
			grid-template-columns: 5rem auto 30vw;
			gap: 1rem;
			.left {
				.profile {
					display: none;
				}
			}
		}
	}
	.left {
		width: 5rem;
		z-index: 5;
		.btn {
			display: none;
		}
	}
	.sidebar {
		h3 {
			display: none;
		}
	}
}

/* for smaller tablets and mobile phone */
@media screen and (max-width: 32em) {
	nav {
		.search-bar {
			display: none;
		}
	}
	main {
		.hive-container {
			grid-template-columns: 0 auto 5rem;
			gap: 0;
			.left {
				grid-column: 3/4;
				position: fixed;
				bottom: 0;
				right: 0;
			}
			.middle {
				grid-column: 1/3;
			}
			.right {
				display: none;
			}
		}
	}
	.left {
		display: none;
		.notification-popup {
			position: absolute;
			left: -20rem;
			width: 20rem;
		}
	}
	.middle {
		.stories {
			height: 9rem;
		}
		.create-post {
			width: 80%;
			margin-left: 0.5rem;
			position: relative;
		}
		.feeds {
			.feed {
				width: 80%;
				margin-left: 0.5rem;
			}
		}
	}
}`;

export default HiveGlobal;
