import styled from "styled-components";

export default function RenderTransaction({ desc, value, type }) {
  if (type === "entry") {
    return (
      <Style>
        <p>{desc}</p>
        <p className="entry">{value}</p>
      </Style>
    );
  }
  return (
    <Style>
      <p>{desc}</p>
      <p className="extract">{value}</p>
    </Style>
  );
}

const Style = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 8px 10px;

  .entry {
    color: green;
  }

  .extract {
    color: red;
  }
`;
