import React, { useState, useEffect } from "react";
import { FaFile } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from './Loading';

export default function Home() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}`)
      .then((res) => setAssignments(res.data));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='container'>
          <h1 className='page-header'>
            Important Assignments <FaFile />
          </h1>
          <div className='inner-container'>
            <div className='grid'>
              {assignments.length !== 0 &&
                assignments.map((assign) => {
                  return (
                    <>
                      <p
                        style={{
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                        onClick={() =>
                          navigate('/assignments/view', { state: { assign } })
                        }
                      >
                        {assign.name}
                      </p>
                      <p>{assign.subject}</p>
                      <p>{assign.deadline.split('T')[0]}</p>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
