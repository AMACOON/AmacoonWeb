import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  thead {
    background-color: #f5f5f5;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  button {
    margin-right: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    color: #000;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:last-child {
    margin-right: 0;
  }

  .update-btn {
    background-color: #007bff;
    color: #000;

    &:hover {
      background-color: #0056b3;
      
    }
  }

  .delete-btn {
    background-color: #dc3545;
    color: #000;

    &:hover {
      background-color: #c82333;
    }
  }
`;
