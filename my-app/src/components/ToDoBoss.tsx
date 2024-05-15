import styled from "styled-components";
import { boss } from "../data/boss";

export function ToDoBoss() {
  return (
    <ToDoBossDiv>
      <h1 className="heading">보스</h1>
      <div className="daily">
        <div>일간</div>
        <ContentsSection data={boss.daily} />
      </div>
      <div className="weekly">
        <div>주간</div>
        <ContentsSection data={boss.weekly} />
      </div>
      <div className="monthly">
        <div>월간</div>
        <ContentsSection data={boss.monthly} />
      </div>
    </ToDoBossDiv>
  );
}

const ToDoBossDiv = styled.div`
  padding: 10px;

  & {
    .heading {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 15px;
    }
  }
`;

interface DataType {
  data: { name: string; image: string }[];
}

function ContentsSection({ data }: DataType) {
  return (
    <ContentsSectionDiv>
      {data.map((v) => (
        <ContentsBoxDiv key={v.name}>
          <img src={v.image} />
          <div className="name">{v.name}</div>
        </ContentsBoxDiv>
      ))}
    </ContentsSectionDiv>
  );
}

const ContentsSectionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0 30px;
`;

const ContentsBoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  padding: 5px;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #fff;
	cursor: pointer;

  &:hover {
    background-color: #e5e7eb;
  }

  img {
    width: 58px;
    height: 58px;
		border-radius: 0.5rem;
  }
  .name {
    flex-grow: 1;
    text-align: center;
  }
`;
