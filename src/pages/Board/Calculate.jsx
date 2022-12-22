import React from "react";
import Header from "../../components/Header";

export default function Calculate() {
  return (
    <>
      <Header />
      <div className="col-8 container">
        <div xxs="1" className="row-cols-lg-2 rew-cols-md-1 row cols-sm-1 row-cols-1">
          <div className="col-6 align-self-center px-5 mb-4 col">
            <h1 className="fw-bold lh-base mt-5 mb-4">
              <span>ㅇㅇ님의 정산 내역입니다.</span>
            </h1>
            <p className="fw-bold">날짜</p>
            <div className="mb-1 input-group input-group-md">
              <input required type="date" className="form_control" />
            </div>
            <br />
            <p className="fw-bold">내용</p>
            <div className="mb-3 input-group input-group-md">
              <input placeholder="내용을 입력해주세요." required type="text" className="form_control" />
            </div>
            <br />
            <p className="fw-bold">금액</p>
            <div className="mb-3 input-group input-group-md">
              <input placeholder="숫자만 입력 가능합니다." required type="number" className="form_control" />
            </div>
            <div className="d-flex justify-content-between row">
              <div className="col">
                <button type="submit">등록</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
