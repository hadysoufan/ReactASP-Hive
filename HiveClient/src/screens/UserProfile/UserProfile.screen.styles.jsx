import styled from 'styled-components';

export const UserHeaderWrapper = styled.div`
    display: flex;
	height: 15rem;
`;

export const UserHeaderInner = styled.div`
    width: 80%;
    height: 15rem;
    display: grid;
    grid-template-columns: auto 1fr ;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
`;

export const UhLeft = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2em 0 0;
    display: flex;

`;

export const UhImage = styled.div`
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const UhImageInner = styled.img`
    width: 10.5rem;
    height: 10.5rem;
    border: .3em solid var(--grey);
    object-fit: cover;
    border-radius: 50%;
    z-index: 2;
`;

export const Gradient = styled.div`
    width: 100%;
    height: 100%;
    padding: .3em;
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(214,41,118,1) 0%, rgba(250,126,30,1) 100%);

`;

export const GradientGray = styled.div`
    width: 100%;
    height: 100%;
    padding: .3em;
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(236,237,243,1) 0%, rgba(228,229,233,1) 100%);

`;

export const UhRight = styled.div`
    padding: 1em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;

export const UserInfo = styled.div`
    font-size: 2em;
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UnameVerified = styled.div`
    height: 1.8rem;
`;

export const EditBtn = styled.button`
width:8rem;
height:auto;
font-size: 1.2rem;
    margin: 1em !important;
    border-radius: 3px !important;
    border: 1px solid ${({ theme }) => theme.colors.button};
    background-color: ${({ theme }) => theme.colors.button};
    padding: .4em !important;
    cursor: pointer !important;
    color: ${({ theme }) => theme.colors.light};
        &:hover {
        background-color: var(--orange);
        color: var(--white);
    }
`;

export const UserLinks = styled.div`
    a {
		margin: 0 1em 0 0;
		cursor: pointer;
        color: black;
		span {
			color: black;
			font-weight: bolder;
		}
        
	}

`;

export const UserBioName = styled.p`
    font-weight: bold;
	margin: 1.75em 0 0 0;
	line-height: 1;
`;

export const UserStories = styled.div`
	width: 70rem;
	height: 10rem;
	position:relative;
	top:-25rem;
	left:28rem;
`;

export const UserStoriesInner = styled.div`
    width: auto;
	height: 8rem;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 4em;
`;

export const StoryWrapper = styled.div`
	width: 100% !important;
	height: 100% !important;
	display: flex;
	flex-direction: column;
	h2 {
		margin: .25em;
		font-size: 1.1em;
		font-weight: 400;
	}
`;

export const StoryInner = styled.div`
    width: 75%;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

export const StoryImg = styled.img`
    width: calc(100% - .5em);
	height: calc(100% - .5em);
	position: absolute;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid var(--grey);
	z-index: 2;
`;

export const UserPageWrapper = styled.div`
    display: flex;
	grid-template-columns:1fr 1fr;
`;

export const UserPageInner = styled.div`
    width: 100%;
	display: grid;
	grid-template-columns: 1fr .02fr;
	grid-template-rows: 1fr 1fr;
`;

export const ImageWapper = styled.div`
    width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

export const Img = styled.img`
    width: 100%;
	height: 100%;
	position: absolute;
	object-fit: cover;
`;

export const ImgOverLayWrapper = styled.div`
    width: 100%;
	height: 100%;
	opacity: 0;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	transition: opacity .15s ease-in-out;
`;

export const ImgBtns = styled.div`
    font-size: 1.3em;
	color: var(--white);
	z-index: 10;
`;

export const ImgOverLay = styled.div`
    width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, .4);
	z-index: 9;
`;

export const ImageBlock = styled.div`
    top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	position: fixed;
	display: none;
	justify-content: center;
	align-items: center;
	z-index: 20;        
`;

export const Block = styled.div`
    width: 60%;
	height: 50%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--light-mode-brig);
	z-index: 20;
`;

export const BlockBg = styled.div`
    top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, .4);
	z-index: 19;
`;