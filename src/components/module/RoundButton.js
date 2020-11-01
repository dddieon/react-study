import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RoundedButton = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: #222;
  background: #eee;
  padding: 8px 16px;
  border-radius: 8px;
`;

export default RoundedButton;
