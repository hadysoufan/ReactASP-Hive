import styled from 'styled-components';

export const Main = styled.main`
	.container {
		.left {
			height: max-content;
			position: sticky !important;
			top: ${({ theme }) => theme.spacing.stickyTopLeft};
			.profile {
				padding: .5rem;
				background: ${({ theme }) => theme.colors.white};
				border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
				display: flex;
				align-items: center;
				column-gap: 1rem;
				width: 100%;
				.handle{
				margin-top: 10px;
				}
				.user-name {
					color: #b36004 !important;
				}
			}
			
		}
	}
`;

export const Left = styled.div`
	.sidebar {
		margin-top: 1rem;
		background: ${({ theme }) => theme.colors.white};
		border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
		.menu-item {
			display: flex;
			align-items: center;
			height: 4rem;
			cursor: pointer;
			transition: all 300ms ease;
			position: relative;
			h3 {
				color: hsl(31.5, 95.7%, 46.1%);
			}
			&:hover {
				background: ${({ theme }) => theme.colors.white};
			}
			&:first-child.active {
				border-top-left-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
				overflow: hidden;
			}
			&:last-child.active {
				border-bottom-left-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
				overflow: hidden;
			}
		}
		ion-icon {
			font-size: 1.4rem;
			color: ${({ theme }) => theme.colors.gray};
			margin-left: 2rem;
			position: relative;
			.notification-count {
				background: ${({ theme }) => theme.colors.danger};
				color: #fff;
				font-size: 0.7rem;
				width: fit-content;
				border-radius: 0.8rem;
				padding: 0.1rem 0.4rem;
				position: absolute;
				top: -0.2rem;
				right: -0.3rem;
			}
		}
		h3 {
			margin-left: 1.5rem;
			font-size: 1rem;
		}
		.active {
			background: ${({ theme }) => theme.colors.light};
			ion-icon {
				color: ${({ theme }) => theme.colors.primary};
			}
			h3 {
				color: ${({ theme }) => theme.colors.primary};
			}
			&::before {
				content: '';
				display: block;
				width: 0.5rem;
				height: 100%;
				position: absolute;
				background: ${({ theme }) => theme.colors.primary};
			}
		}
	}
	.btn-hive {
		margin-top: 1rem;
		width: 100%;
		text-align: center;
		padding: 1rem 0;
	}

    /* notification popup */
	.notification-popup {
		position: absolute;
		top: 0;
		left: 110%;
		width: 30rem;
		background: ${({ theme }) => theme.colors.white};
		border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
		padding: ${({ theme }) => theme.spacing.cardPadding};
		box-shadow: 0 0 2rem hsl(${({ theme }) => theme.colors.primary}, 75%, 60% 25%);
		z-index: 8;
		display: none;
		&::before {
			content: '';
			width: 1.2rem;
			height: 1.2rem;
			display: block;
			background: ${({ theme }) => theme.colors.white};
			position: absolute;
			left: -0.6rem;
			transform: rotate(45deg);
		}
		>div {
			display: flex;
			align-items: start;
			gap: 1rem;
			margin-bottom: 1rem;
		}
		small {
			display: block;
		}
	}
`;


/* //////////////////// */
/* Left side style */

/* sidebar style */
