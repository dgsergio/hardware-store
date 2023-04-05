import styled from "styled-components";

const MoreSection = styled.section`
  text-align: center;
  margin-top: 6rem;
  & h4 {
    font-size: 2.6rem;
    text-transform: uppercase;
  }
  & p {
    max-width: 60rem;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 3rem;
  }
`;

const MoreInfo = () => {
  return (
    <MoreSection>
      <h4>This is a demo website</h4>
      <p>
        Hardware store is a fake ecommerce, the products presented on this page
        do not really exist. It is simply a demo page that allows you to see the
        potential of different programming technologies.
      </p>
      <p>
        The prices, information, warranty and model are totally far from reality
        and at no time should these data be taken as informative.
      </p>
      <p>
        You will not be able to really buy the products or establish any type of
        commercial contact, we apologize if you have misunderstood the purpose
        of this website.
      </p>
    </MoreSection>
  );
};

export default MoreInfo;
