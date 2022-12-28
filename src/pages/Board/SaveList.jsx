import React from "react";
import styled from "styled-components";

const CardSectionDiv = styled.div`
  /* border: 5px solid blueviolet; */
  width: 100%;
  /* height: 100%; */
  .row {
    display: flex;
    gap: 10px;
    /* .card {
      margin: 10px;
    } */
  }
`;

export default function SaveList() {
  // 저장목록 데이터 불러오기

  return (
    <>
      <CardSectionDiv>
        <div className="row">
          {" "}
          <div className="card col-3">
            <img src="//source.unsplash.com/500x503/?disney" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem, ipsum dolor.</p>
              <a href="#" className="btn btn-primary">
                장소 더보기
              </a>
            </div>{" "}
          </div>
          <div className="card col-3">
            <img src="//source.unsplash.com/500x503/?disney" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit.</p>
              <a href="#" className="btn btn-primary">
                장소 더보기
              </a>
            </div>
          </div>
          <div className="card col-3">
            <img src="//source.unsplash.com/500x503/?disney" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="btn btn-primary">
                장소 더보기
              </a>
            </div>
          </div>
          <div className="card col-3">
            <img src="//source.unsplash.com/500x503/?disney" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem, ipsum dolor.</p>
              <a href="#" className="btn btn-primary">
                장소 더보기
              </a>
            </div>{" "}
          </div>
          <div className="card col-3">
            <img src="//source.unsplash.com/500x503/?disney" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem, ipsum dolor.</p>
              <a href="#" className="btn btn-primary">
                장소 더보기
              </a>
            </div>{" "}
          </div>
        </div>
      </CardSectionDiv>
    </>
  );
}
