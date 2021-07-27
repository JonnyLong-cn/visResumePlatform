import styled from "styled-components";
export const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #27292c;
  /* 所有文本居中 */
  text-align: center;
  .container{
    width: 100%;
    color: #ffffff;
    padding-top: calc(8vh + 60px);
    img{
      width: 112px;
      height: 112px;
    }
    .title{
      font-size: 32px;
      font-family: 'Kaiti';
      /* 行高 */
      line-height: 40px;
    }
    .tips {
      font-size: 16px;
      line-height: 24px;
      margin-top: 24px;
    }
    .action {
      width: 300px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
      .item {
        width: 25%;
        cursor: pointer;
      }
    }
    footer{
      position: fixed;
      bottom: 5vh;
      width: 100%;
      opacity: 0.6;
    }
  }
`;