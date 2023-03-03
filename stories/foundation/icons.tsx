import Fuse from 'fuse.js';
import { useEffect, useRef, useState } from 'react';

export function IconsWrapper({ children, ...props }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '8px',
        padding: '.5rem',
        justifyContent: 'center',
        backgroundColor: '#fff',
        gridTemplateRows: '1fr auto',
        border: '1px solid #ddd',
        // boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div style={{ padding: '1rem' }}>
        {children}
        <div
          style={{
            width: "150px",
            paddingInline: "1rem",
            whiteSpace: 'nowrap',
            fontSize: '11px',
            marginTop: '1rem',
            overflow: 'hidden',
            color: "#555",
            textOverflow: 'ellipsis',
          }}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
}

export function IconsFilter() {
  const [data] = useState([
    {
      name: 'Home',
      component: <atlas-icon-home />,
    },
    {
      name: 'Mail',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Indent Increase Indent Increase',
      component: <atlas-icon-mail />,
    },
    {
      name: 'Message Message',
      component: <atlas-icon-mail />,
    },
  ]);
  const ref = useRef<any>();
  const [icons, setIcons] = useState(data);

  useEffect(() => {
    ref.current.addEventListener('input', ({ target: { value } }) => {
      const options = {
        keys: ['name'],
      };

      console.log(value);

      if (value?.length === 0) {
        setIcons([...data]);
        return;
      }

      const fuse = new Fuse(data, options);
      const s = fuse.search(value);
      setIcons([...s.map(({ item }) => item)]);
    });
  }, [data]);

  return (
    <div
      style={{
        backgroundColor: 'rgb(244, 244, 244)',
        padding: '1rem',
        marginTop: '2rem',
        width: '100%',
      }}
    >
      <input
        ref={ref}
        placeholder='Search...'
        style={{
          fontSize: '1rem',
          width: '100%',
          padding: '1rem',
          marginBottom: '2rem',
          borderRadius: '6px',
          border: '2px solid #ddd',
        }}
      />

      {icons.length > 0 ? (
        <div
          style={{
            rowGap: '.5rem',
            display: 'grid',
            columnGap: '.5rem',
            borderRadius: '6px',
            justifyContent: 'space-between',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 150px))',
            gridTemplateRows: 'repeat(auto-fill, auto)',
          }}
        >
          {icons.map((icon, i) => (
            <IconsWrapper key={i} {...icon}>
              {icon.component}
            </IconsWrapper>
          ))}
        </div>
      ) : null}
    </div>
  );
}
