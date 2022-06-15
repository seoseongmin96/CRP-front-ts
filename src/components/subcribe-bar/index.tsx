import GUButton from '@components/control/gu-button';
import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ThemeVariation } from '@common/enum';

const StyledGUButton = styled(GUButton)`
  text-transform: uppercase;
  height: ${50 / 16}rem;
`;

const FormSchema = Yup.object().shape({
  email: Yup.string().email('Email is not valid').required('Please enter your email'),
});

const SubcribeBar = ({ onSubmit, theme }: { onSubmit: (val: { email: string }) => void; theme?: ThemeVariation }) => {
  return (
    <div className="subcribe-bar">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <div className="subcribe-bar__content">
            <h5>업데이트를 놓치지 마세요.</h5>
            <h3>지금 바로 구독해보세요!</h3>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Formik initialValues={{ email: '' }} onSubmit={onSubmit} validationSchema={FormSchema}>
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <>
                <form className="subcribe-bar__form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    placeholder="You email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <StyledGUButton
                    theme={theme}
                    size={'large'}
                    weight="bold"
                    variant="contained"
                    shape="round"
                    buttonType="submit">
                    구독하기
                  </StyledGUButton>
                </form>
                {!!errors.email && !!touched.email && <span className="error">{errors.email}</span>}
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SubcribeBar;
