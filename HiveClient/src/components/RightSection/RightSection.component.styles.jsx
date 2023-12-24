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
`;

export const FriendRequest = styled.div`
margin-top: 1rem;
  h4 {
    color: ${({ theme }) => theme.colors.gray};
    margin: 1rem 0;
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
	.profile-picture {
		img {
			border-radius: 50%;
		}
	}
    .action {
      display: flex;
      gap: 1rem;
    }
  }
`;
	
