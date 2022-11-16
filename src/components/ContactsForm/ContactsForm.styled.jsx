import styled from '@emotion/styled';

export const ContactsForm = styled.form`
  /* border: ${p => p.theme.borders.medium} ${p => p.theme.colors.black}; */
  border-radius: 10px;
  /* border: 1px solid #514438; */
  padding: 30px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Input = styled.input`
  width: 280px;
  margin-top: 3px;
  margin-bottom: 12px;
  padding-left: 5px;
  font-size: 15px;
  border: none;
  height: 35px;
  border-radius: 7px;
`;

export const Button = styled.button`
  height: 40px;
  background-color: #647b76;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  outline: none;
  border: 1px solid #647b76;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    border: 1px solid white;
  }
`;
