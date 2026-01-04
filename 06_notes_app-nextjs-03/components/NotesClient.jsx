"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

function NotesClient({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createNote = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      const result = await response.json();
      if (result.success) {
        setNotes([result.data, ...notes]);
        toast.success("Notes created successfully");
        setTitle("");
        setContent("");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error creating notes", error);
      toast.error("Something went wrong");
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (result.success) {
        setNotes(notes.filter((note) => note._id !== id));
        toast.success("Notes deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting notes", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={createNote} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl text-gray-800 font-semibold mb-4">
          Create New Note
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Note Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full p-3 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-blue-500"
            />
            <button
              type="Submit"
              disabled={isLoading}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:cursor-pointer hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isLoading ? "Creating ..." : "Create Note"}
            </button>
          </div>
        </h2>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Notes ({notes.length})</h2>
        {notes.length === 0 ? (
          <p className="text-gray-400">No notes yet.Create Your first Note.</p>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg text-gray-800 font-semibold">
                  {note.title}
                </h3>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-500 text-sm hover:cursor-pointer">
                    Edit <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className="text-red-500 hover:text-red-500 text-sm hover:cursor-pointer"
                  >
                    Delete <RiDeleteBin6Fill />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-2">{note.content}</p>
              <p className="text-sm text-gray-500">
                Created: {new Date(note.createdAt).toLocaleString()}
              </p>
              {note.updatedAt !== note.createdAt && (
                <p className="text-sm text-gray-500">
                  Updated: {new Date(note.updatedAt).toLocaleString()}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotesClient;
