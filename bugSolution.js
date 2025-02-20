```javascript
import Link from 'next/link';

function MyComponent() {
  const aboutPage = '/about'; // Declare href as a constant string

  return (
    <div>
      <Link href={aboutPage}>
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```