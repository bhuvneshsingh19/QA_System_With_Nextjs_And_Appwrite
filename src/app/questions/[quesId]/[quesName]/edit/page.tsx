import { db, questionCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

const Page = async ({ params }: { params: { quesId: string; quesName: string } }) => {
    const question = await databases.getDocument(db, questionCollection, params.quesId);

    const mappedQuestion = {
        authorId: question.authorId,
        title: question.title,
        // spread other properties if needed
        ...question
    };

    return <EditQues question={mappedQuestion} />;
};

export default Page;
