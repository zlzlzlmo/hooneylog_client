export interface INotionProperties {
  category: {
    multi_select: [{ name: string }];
  };
  created_date: {
    created_time: string;
  };
  description: {
    rich_text: [
      {
        plain_text: string;
      },
    ];
  };

  image: {
    files: [{ name: string; file?: { url: string }; external?: { url: string } }];
  };

  slug: {
    rich_text: [{ plain_text: string }];
  };

  이름: {
    title: [{ plain_text: string }];
  };
}

export interface INotionPost {
  id: string;
  properties: INotionProperties;
  results: any[];
}
