import styled from "styled-components";

export const Feeds = styled.div`
  .feed {
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.spacing.cardBorderRadius};
    padding: ${({ theme }) => theme.spacing.cardPadding};
    margin: 1rem 0;
    font-size: 0.85rem;
    line-height: 1.5;
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
  padding: 0.5rem 0;
  margin: 0;
  font-size: 0.875rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  &:hover {
    display: block;
  }
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

export const Modal = styled.div`
  display: ${(props) => (props.isModalOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: -4rem;
  right: -28rem;
  cursor: pointer;
  font-size: 20px;
  color: white;
`;
