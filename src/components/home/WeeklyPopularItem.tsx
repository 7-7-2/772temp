import { WeeklyPopularTypes } from '@/types/types';
import { cx } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { Align, Flex } from '@/styles/layout';

const WeeklyPopularItem = ({ data }: { data: WeeklyPopularTypes }) => {
  return (
    <Container className={cx(Flex, Align)}>
      <span>{data.ranking}</span>
      <BrandInfo className={cx(Flex, Align)}>
        <Icon></Icon>
        <span>{data.brand.brand}</span>
      </BrandInfo>
    </Container>
  );
};

export default WeeklyPopularItem;

const Container = styled.div`
  height: 54px;
  border-radius: 50px;
  padding: 8px 20px;
  background: #fff;
`;
const BrandInfo = styled.div`
  font-size: var(--font-sizes-sm);
  margin-left: 20px;
`;
const Icon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: darkkhaki;
  margin-right: 12px;
`;