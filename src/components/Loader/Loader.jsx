import { SpinnerDotted } from 'spinners-react';

export default function Loader() {
  return (
    <SpinnerDotted
      enabled={true}
      size='80'
      color='#490D9A'
      thickness='150'
      style={{
        display: 'block',
        marginTop: '20',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    />
  );
}
