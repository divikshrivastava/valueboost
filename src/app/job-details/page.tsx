"use client";

import { useState } from 'react';

const JobDetails = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDomain, setCompanyDomain] = useState('');
    const [industry, setIndustry] = useState('');
    const [report, setReport] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [prepPlans, setPrepPlans] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Generate the report (using mock data for now)
        const generatedReport = `Job Title: ${jobTitle}\nJob Description: ${jobDescription}\nCompany: ${companyName}\nDomain: ${companyDomain}\nIndustry: ${industry}`;
        setReport(generatedReport);
    };

    const createPrepPlan = async () => {
        setIsLoading(true);
        // Simulate loading for 5 seconds
        setTimeout(() => {
            setPrepPlans([
                "Three-Month Plan: Objectives, Action Items, Success Metrics",
                "Six-Month Plan: Objectives, Action Items, Success Metrics",
                "Twelve-Month Plan: Objectives, Action Items, Success Metrics",
            ]);
            setIsLoading(false);
        }, 5000);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-navy-blue text-white rounded-lg">
            <h2 className="text-2xl mb-4">Enter Job Details</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 text-black rounded-md"
                    required
                />
                <textarea
                    placeholder="Job Description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 text-black rounded-md"
                    required
                />
                <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 text-black rounded-md"
                    required
                />
                <input
                    type="text"
                    placeholder="Company Domain"
                    value={companyDomain}
                    onChange={(e) => setCompanyDomain(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 text-black rounded-md"
                    required
                />
                <input
                    type="text"
                    placeholder="Industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 text-black rounded-md"
                    required
                />
                <button type="submit" className="w-full p-3 bg-light-blue text-white rounded-md">
                    Generate Report
                </button>
            </form>

            {report && (
                <div className="mt-6">
                    <h3 className="text-xl mb-4">Generated Report</h3>
                    <pre className="p-3 bg-gray-100 text-black rounded-md">{report}</pre>
                    <button
                        className="w-full mt-4 p-3 bg-light-blue text-white rounded-md"
                        onClick={createPrepPlan}
                    >
                        Create Prep Plan
                    </button>
                </div>
            )}

            {isLoading && (
                <div className="mt-6">
                    <p>Loading prep plans...</p>
                </div>
            )}

            {prepPlans.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl mb-4">Prep Plans</h3>
                    {prepPlans.map((plan, index) => (
                        <details key={index} className="mb-4">
                            <summary className="cursor-pointer">{plan.split(':')[0]}</summary>
                            <p>{plan}</p>
                        </details>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobDetails;
