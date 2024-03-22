import React from 'react'

const BottomInfo = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        backgroundColor: 'black',
        display: 'flex',
      }}
    >
      <div className="textbox" style={{ color: 'white', padding: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
          <li style={{ marginBottom: '10px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>회사 정보</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '20px', marginTop: '5px' }}>
              <li>회사명: 주식회사 ABC</li>
              <li>주소: 서울특별시 강남구 123번지</li>
              <li>전화번호: 02-1234-5678</li>
            </ul>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>고객 지원</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '20px', marginTop: '5px' }}>
              <li>문의 전화: 080-1234-5678</li>
              <li>이메일: help@example.com</li>
              <li>운영 시간: 09:00 - 18:00 (평일)</li>
            </ul>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>매장 안내</p>
            <ul style={{ listStyleType: 'none', paddingLeft: '20px', marginTop: '5px' }}>
              <li>서울점: 강남구 역삼동 456번지</li>
              <li>부산점: 부산광역시 해운대구 789번지</li>
              <li>대구점: 대구광역시 중구 1010번지</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BottomInfo
