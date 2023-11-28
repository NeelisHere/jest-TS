
function FormOne() {
    return (
        <>
            <h1>Job Application</h1>
            <h2>Section-1</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="job-location">Job Location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="UK">United Kingdom</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms-n-conditions" />
                        I agree to terms and conditions.
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default FormOne