import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface IStatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: IStatusLabelProps) {
  return (
    <div
      className={clsx(
        `inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium cursor-pointer`,
        status === Status.Active && 'text-green-700 bg-green-100',
        status === Status.NotActive && 'text-red-700 bg-red-100',
        status === Status.Pending && 'text-orange-700 bg-orange-100',
        status === Status.Suspended && 'text-blue-700 bg-blue-100',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        }
      )}
    >
      <div className="w-1.5 h-1.5 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}