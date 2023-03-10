import React from 'react';
import styled from 'styled-components';
import template1 from '../images/template1.png';
import template2 from '../images/template2.png';
import template3 from '../images/template3.png';
import template4 from '../images/template4.png';

const MiniTemplate = () => {
  return (
    <MiniTemplateContainer>
      <Title>읽어보면 좋아요</Title>
      <TemplateBoxContainer>
        <TemplateBox>
          <Template1
            onClick={() =>
              window.open('https://if-blog.tistory.com/10531', '_blank')
            }
          >
            <Img1 src={template1} />
            <Desc1>레포트 작성 가이드</Desc1>
          </Template1>
          <Template2
            onClick={() =>
              window.open(
                'https://m.post.naver.com/viewer/postView.naver?volumeNo=6959810&memberNo=10505396',
                '_blank',
              )
            }
          >
            <Img2 src={template2} />
            <Desc2>자료 조사 하는 법</Desc2>
          </Template2>
          <Template2
            onClick={() =>
              window.open(
                'https://m.post.naver.com/viewer/postView.nhn?volumeNo=4624319&memberNo=10505396',
                '_blank',
              )
            }
          >
            <Img3 src={template3} />
            <Desc2>보고서 각주와 참고문헌 작성법</Desc2>
          </Template2>
          <Template1
            onClick={() => window.open('https://linkareer.com', '_blank')}
          >
            <Img4 src={template4} />
            <Desc1>대학생 공모전 대외활동, 링커리어</Desc1>
          </Template1>
        </TemplateBox>
      </TemplateBoxContainer>
    </MiniTemplateContainer>
  );
};

const MiniTemplateContainer = styled.div`
  position: relative;
  margin-left: 2.8vw;
  width: 84.7vw;
  height: 250px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.3vw;
  line-height: 100%;
  margin-bottom: 20px;
`;

const TemplateBoxContainer = styled.div`
  overflow: hidden;
  height: 250px;
`;

const TemplateBox = styled.div`
  display: flex;
`;

const Template1 = styled.div`
  position: relative;
  width: 18.5vw;
  height: 190px;
  background: #fce44c;
  border-radius: 12px;
  margin-right: 2.604vw;
  display: grid;
  grid-template-rows: 8fr 2fr;
  &:hover {
    cursor: pointer;
  }
`;

const Template2 = styled(Template1)`
  background: #487aff;
`;

const Img1 = styled.img`
  width: 150px;
  margin: auto;
`;
const Img2 = styled(Img1)``;

const Img3 = styled(Img1)`
  width: 100px;
`;

const Img4 = styled(Img1)`
  width: 120px;
`;

const Desc1 = styled.div`
  font-weight: 500;
  font-size: 1.042vw;
  line-height: 100%;
  color: #707070;
  background: #fff8b7;
  border-radius: 0px 0px 12px 12px;
  /* width: 24.58vw; */
  width: 18.5vw;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 1.25vw;
`;

const Desc2 = styled(Desc1)`
  background: #d4e4ff;
`;

export default MiniTemplate;
