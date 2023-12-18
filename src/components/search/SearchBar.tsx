import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { SEARCH_TEXTS } from '@/constants/search';
import { useNavigateTo } from '@/hooks/useNavigateTo';
import { iconPropsGenerator } from '@/utils/iconPropsGenerator';
import { Between, Flex, FlexCenter } from '@/styles/layout';
import { SearchInput } from '@/styles/styles';
import { styled } from 'styled-system/jsx';
import { cx } from 'styled-system/css';

const SearchBar = () => {
  const handleHome = useNavigateTo('/');
  return (
    <>
      <div className={cx(Flex, Between)}>
        <Container className={Flex}>
          <Area className={Flex}>
            <IconContainer className={FlexCenter}>
              <Icon {...iconPropsGenerator('search', '24')} />
            </IconContainer>
            <input
              className={SearchInput}
              type="text"
              placeholder={SEARCH_TEXTS.placeHolder}
            />
          </Area>
        </Container>
        <Button
          className={FlexCenter}
          text={SEARCH_TEXTS.moveToHome}
          onTouchEnd={handleHome}
        />
      </div>
      <Divider />
    </>
  );
};

const Container = styled.div`
  width: 85%;
  gap: 20px;
  padding: 5px 0px;
  margin: 7px 0;
  background-color: var(--colors-tertiary);
  border-radius: 6px;
`;
const Area = styled.div`
  height: 32px;
`;
const IconContainer = styled.div`
  padding: 10px;
`;

const Divider = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    border-top: 1px solid #edecec;
    left: -20px;
    width: calc(50% + 20px);
  }

  &::before {
    content: '';
    position: absolute;
    border-top: 1px solid #edecec;
    right: -20px;
    width: calc(50% + 20px);
  }
`;
export default SearchBar;
