import styled from 'styled-components';

export const NavBar = styled.section`
nav {
	width: 100%;
	background: ${({ theme }) => theme.colors.white};
	padding: 0.7rem 0;
	position: fixed;
	top: 0;
	z-index: 10;
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.search-bar {
		input[type='search'] {
			&::placeholder {
				color: ${({ theme }) => theme.colors.gray};
			}
		}
	}
	.create {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
}
.logo-header {
	display: flex;
	gap: 1rem;
}
.container {
	.logo-header {
		.logo {
			a {
				color: #ff8906;
			}
			&:visited {
				a {
					color: #ff8906 !important;
				}
			}
			&:hover {
				a {
					color: #b36004;
				}
			}
		}
	}
}
.logo {
	margin-top: 0.3rem;
}
.logo-img {
	width: 40px;
	height: 35px;
}
.search-bar {
	background: ${({ theme }) => theme.colors.light};
	border-radius: ${({ theme }) => theme.spacing.borderRadius};
	padding: ${({ theme }) => theme.spacing.searchPadding};
	input[type='search'] {
		background: transparent;
		width: 30vw;
		margin-left: 1rem;
		font-size: 0.9rem;
		color: ${({ theme }) => theme.colors.dark};
	}
}
.dropdown-content {
	display: none;
	position: absolute;
	z-index: 1;
	background-color: white;
	a {
		display: block;
		padding: 0.5rem;
		color: #b36004;
		text-decoration: none;
		&:hover {
			background-color: #eee;
		}
	}
}
.dropdown {
	&:hover {
		.dropdown-content {
			display: block;
			color: #b36004;
		}
	}
}
.dropdown-btn {
	background: none;
	border: none;
	outline: none;
	color: #ff8906;
	font-size: 1.2rem;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: #ff8906;
	}
}


`;

