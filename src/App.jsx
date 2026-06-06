function App() {
  const services = [
    ["Amazon S3", "Static Website Hosting", "Stores React build files", "🪣"],
    ["CloudFront", "CDN / HTTPS", "Faster and secure delivery", "🌐"],
    ["EC2", "Backend Hosting", "Future Node.js API hosting", "🖥️"],
    ["CloudWatch", "Monitoring", "Logs and metrics", "📊"],
  ];

  const flow = [
    ["👨‍💻", "Developer", "Windows 11"],
    ["🐙", "GitHub", "Source Code"],
    ["🪣", "S3", "Frontend Hosting"],
    ["🌐", "CloudFront", "CDN / HTTPS"],
    ["👥", "Users", "Public Access"],
  ];

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <header style={styles.header}>
          <div style={styles.badge}>🚀 Build • Deploy • Secure • Monitor</div>
          <h1 style={styles.title}>AWS Cloud Deployment Lab</h1>
          <p style={styles.subtitle}>Enterprise Security Engineering Lab</p>
          <p style={styles.desc}>
            React application deployed using Amazon S3 Static Website Hosting.
          </p>
        </header>

        <section style={styles.services}>
          {services.map(([title, subtitle, desc, icon]) => (
            <div style={styles.card} key={title}>
              <div style={styles.icon}>{icon}</div>
              <h2 style={styles.cardTitle}>{title}</h2>
              <p style={styles.cardSubtitle}>{subtitle}</p>
              <p style={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </section>

        <section style={styles.flowBox}>
          <h2 style={styles.sectionTitle}>AWS Architecture Flow</h2>
          <div style={styles.flow}>
            {flow.map(([icon, title, text], index) => (
              <div style={styles.flowItem} key={title}>
                <div style={styles.flowIcon}>{icon}</div>
                <h3 style={styles.flowTitle}>{title}</h3>
                <p style={styles.flowText}>{text}</p>
                {index < flow.length - 1 && <span style={styles.arrow}>→</span>}
              </div>
            ))}
          </div>
        </section>

        <section style={styles.bottomGrid}>
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>🎯 Lab Objectives</h2>
            <p>✅ Deploy React application to AWS</p>
            <p>✅ Host static website using Amazon S3</p>
            <p>✅ Understand S3 bucket and object concepts</p>
            <p>✅ Prepare for CloudFront and HTTPS</p>
          </div>

          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>🛡️ Skills Practiced</h2>
            <p>✅ AWS Fundamentals</p>
            <p>✅ Cloud Deployment</p>
            <p>✅ Static Website Hosting</p>
            <p>✅ S3 Bucket Policy</p>
          </div>
        </section>

        <footer style={styles.footer}>
          AWS Cloud Deployment Lab • S3 Static Website Hosting • Project #8
        </footer>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eaf1ff, #f8fafc)",
    fontFamily: "Segoe UI, Arial, sans-serif",
    color: "#0f172a",
    padding: "18px",
    boxSizing: "border-box",
  },
  wrapper: {
    maxWidth: "1050px",
    margin: "0 auto",
  },
  header: {
    background: "linear-gradient(135deg, #0f172a, #2563eb, #9333ea)",
    color: "white",
    borderRadius: "20px",
    textAlign: "center",
    padding: "26px 20px",
    marginBottom: "16px",
    boxShadow: "0 12px 28px rgba(15,23,42,0.22)",
  },
  badge: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "700",
    padding: "7px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.16)",
    border: "1px solid rgba(255,255,255,0.28)",
    marginBottom: "10px",
  },
  title: {
    margin: "0",
    fontSize: "38px",
    lineHeight: "1.05",
    fontWeight: "900",
    letterSpacing: "-0.8px",
  },
  subtitle: {
    margin: "8px 0 0",
    fontSize: "18px",
    fontWeight: "800",
    color: "#67e8f9",
  },
  desc: {
    margin: "8px 0 0",
    fontSize: "13px",
    color: "#dbeafe",
  },
  services: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "14px",
    marginBottom: "14px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 8px 22px rgba(15,23,42,0.1)",
    border: "1px solid #e5e7eb",
    minHeight: "145px",
  },
  icon: {
    width: "45px",
    height: "45px",
    margin: "0 auto 8px",
    display: "grid",
    placeItems: "center",
    fontSize: "25px",
    borderRadius: "14px",
    background: "#eff6ff",
  },
  cardTitle: {
    margin: "0",
    fontSize: "20px",
    color: "#2563eb",
  },
  cardSubtitle: {
    margin: "6px 0",
    fontSize: "14px",
    fontWeight: "800",
  },
  cardDesc: {
    margin: "0",
    fontSize: "12px",
    color: "#64748b",
    lineHeight: "1.4",
  },
  flowBox: {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "18px",
    marginBottom: "14px",
    boxShadow: "0 8px 22px rgba(15,23,42,0.1)",
    border: "1px solid #e5e7eb",
  },
  sectionTitle: {
    textAlign: "center",
    margin: "0 0 14px",
    fontSize: "22px",
  },
  flow: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
  },
  flowItem: {
    position: "relative",
    textAlign: "center",
  },
  flowIcon: {
    width: "48px",
    height: "48px",
    margin: "0 auto 6px",
    borderRadius: "50%",
    background: "#eff6ff",
    display: "grid",
    placeItems: "center",
    fontSize: "24px",
    border: "1px solid #bfdbfe",
  },
  flowTitle: {
    margin: "0",
    fontSize: "15px",
    fontWeight: "800",
  },
  flowText: {
    margin: "4px 0 0",
    fontSize: "12px",
    color: "#64748b",
  },
  arrow: {
    position: "absolute",
    top: "18px",
    right: "-12px",
    color: "#2563eb",
    fontWeight: "900",
  },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  panel: {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "18px",
    boxShadow: "0 8px 22px rgba(15,23,42,0.1)",
    border: "1px solid #e5e7eb",
    minHeight: "155px",
  },
  panelTitle: {
    margin: "0 0 12px",
    fontSize: "20px",
    textAlign: "center",
  },
  footer: {
    marginTop: "14px",
    textAlign: "center",
    fontSize: "13px",
    fontWeight: "800",
    color: "#475569",
  },
};

export default App;