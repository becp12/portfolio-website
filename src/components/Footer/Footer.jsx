import './Footer.css';

export default function Footer() {
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <div className="footer">
        <p>&copy; {currentYear > 2022 ? `2022 - ${currentYear}` : '2022'} Rebecca Preece. All Rights Reserved</p>
    </div>
  );
}
