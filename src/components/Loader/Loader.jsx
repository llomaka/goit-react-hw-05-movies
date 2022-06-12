import { SpinnerDotted } from 'spinners-react';

export default function Loader() {
  return (
    <SpinnerDotted
      enabled={true}
      size='100'
      color='#490D9A'
      thickness='150'
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    />
  );
}
