import React, { useState, useEffect } from "react";



export default function Settings(){
  // local state (replace with context/API in real app)
  const [theme, setTheme] = useState("dark"); // dark | light
  const [notifications, setNotifications] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(()=>{
    // apply theme immediately (simple)
    document.documentElement.dataset.theme = theme;
  },[theme]);

  function handleSavePrefs(e){
    e.preventDefault();
    setSaving(true);
    setTimeout(()=>{
      setSaving(false);
      console.log("Preferences saved", { theme, notifications });
    },700);
  }

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      
      className="page"
    >
      <h1>Settings</h1>
      <p className="muted">Personalize your dashboard and account preferences.</p>

      <form onSubmit={handleSavePrefs} className="card" style={{display:"grid",gap:"1rem",marginTop:"1rem"}}>
        {/* Appearance */}
        <div style={{display:"grid",gap:8}}>
          <h3 style={{margin:0}}>Appearance</h3>
          <div className="muted" style={{fontSize:13}}>Choose your theme</div>

          <div style={{display:"flex",gap:12,marginTop:8}}>
            <label className={`pill ${theme==="dark" ? "pill-active" : ""}`}>
              <input type="radio" name="theme" value="dark" checked={theme==="dark"} onChange={()=>setTheme("dark")} />
              Dark
            </label>

            <label className={`pill ${theme==="light" ? "pill-active" : ""}`}>
              <input type="radio" name="theme" value="light" checked={theme==="light"} onChange={()=>setTheme("light")} />
              Light
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div style={{display:"grid",gap:8}}>
          <h3 style={{margin:0}}>Notifications</h3>
          <div style={{display:"flex",alignItems:"center",gap:12,marginTop:8}}>
            <div style={{flex:1}}>
              <div style={{fontWeight:600}}>Email notifications</div>
              <div className="muted" style={{fontSize:13}}>Receive important updates by email</div>
            </div>
            <label className="switch">
              <input type="checkbox" checked={notifications} onChange={()=>setNotifications(v=>!v)} />
              <span className="slider" />
            </label>
          </div>
        </div>

        {/* Password change */}
        <div style={{display:"grid",gap:8}}>
          <h3 style={{margin:0}}>Change Password</h3>
          <div className="muted" style={{fontSize:13}}>Leave empty to keep current password</div>

          <div style={{display:"grid",gap:8,marginTop:8}}>
            <input placeholder="Current password" type="password" className="form-input" />
            <input placeholder="New password" type="password" className="form-input" />
            <input placeholder="Confirm new password" type="password" className="form-input" />
          </div>
        </div>

        <div style={{display:"flex",justifyContent:"flex-end",gap:12}}>
          <button type="submit" className="btn" disabled={saving}>{saving ? "Saving..." : "Save preferences"}</button>
        </div>
      </form>
    </motion.section>
  );
}
