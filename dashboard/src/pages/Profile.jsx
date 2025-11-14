import React, { useState } from "react";



export default function Profile(){
  // sample initial user (in real app, fetch from API / context)
  const initial = {
    name: "Kanishak Todwal",
    email: "kanishak@gmail.com",
    bio: "Frontend Dev • builder • coffee lover",
    avatar: "/src/assets/boy.png"
  };

  const [user, setUser] = useState(initial);
  const [editing, setEditing] = useState(false);
  const [preview, setPreview] = useState(initial.avatar);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e){
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }

  function handleAvatar(e){
    const file = e.target.files?.[0];
    if (!file) return;
    // preview locally
    const url = URL.createObjectURL(file);
    setPreview(url);
    setUser(prev => ({ ...prev, avatar: url }));
  }

  function handleSave(e){
    e.preventDefault();
    setError("");
    if(!user.name.trim() || !user.email.trim()){
      setError("Name and email are required.");
      return;
    }
    setSaving(true);
    // simulate API
    setTimeout(()=>{
      setSaving(false);
      setEditing(false);
      // release object URL if needed — skip here
      // show small toast? console for now
      console.log("Saved", user);
    }, 800);
  }

  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      className="page"
    >
      <div className="profile-header" style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"}}>
        <img src={preview} alt={user.name} className="avatar" style={{width:92,height:92}} />
        <div>
          <h1 style={{margin:0}}>{user.name}</h1>
          <p className="muted" style={{marginTop:6}}>{user.email}</p>
        </div>
        <div style={{marginLeft:"auto"}}>
          <button className="btn ghost" onClick={()=>setEditing(v=>!v)}>
            {editing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>

      <form className="card" onSubmit={handleSave} style={{display:"grid",gap:"1rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"1rem",alignItems:"center"}}>
          <label style={{fontWeight:600}}>Avatar</label>
          <div style={{display:"flex",gap:12,alignItems:"center"}}>
            <img src={preview} alt="preview" className="avatar" style={{width:72,height:72}} />
            <div>
              <input
                id="avatarFile"
                type="file"
                accept="image/*"
                onChange={handleAvatar}
                disabled={!editing}
              />
              <div className="muted" style={{fontSize:12,marginTop:6}}>PNG / JPG, max 2MB</div>
            </div>
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"1rem",alignItems:"center"}}>
          <label style={{fontWeight:600}}>Name</label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!editing}
            className="form-input"
            required
          />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"1rem",alignItems:"center"}}>
          <label style={{fontWeight:600}}>Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editing}
            className="form-input"
            required
          />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"1rem",alignItems:"start"}}>
          <label style={{fontWeight:600}}>Bio</label>
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
            disabled={!editing}
            rows={4}
            className="form-input"
          />
        </div>

        {error && <div className="error">{error}</div>}

        <div style={{display:"flex",gap:12,justifyContent:"flex-end"}}>
          {editing && (
            <button className="btn" type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save changes"}
            </button>
          )}
        </div>
      </form>
    </motion.section>
  );
}
